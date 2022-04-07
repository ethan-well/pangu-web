import simpleRestProvider from "./dataProvider";

const dataProvider = simpleRestProvider(
  `${process.env.REACT_APP_DATE_PROVIDER_HOST}`
);

export default () => ({
  ...dataProvider,
  update: (resource, params) => {
    if (resource != "sub_products" || !params.data.pictures) {
      return dataProvider.update(resource, params);
    }

    /**
     * For posts update only, convert uploaded image in base 64 and attach it to
     * the `picture` sent property, with `src` and `title` attributes.
     */

    // Freshly dropped pictures are File objects and must be converted to base64 strings
    const newPictures = params.data.pictures.filter(
      (p) => p.rawFile instanceof File
    );
    const formerPictures = params.data.pictures.filter(
      (p) => !(p.rawFile instanceof File)
    );

    return Promise.all(newPictures.map(convertFileToBase64))
      .then((base64Pictures) =>
        base64Pictures.map((picture64, index) => ({
          src: picture64,
          title: `${params.data.pictures[index].title}`,
        }))
      )
      .then((transformedNewPictures) =>
        dataProvider.update(resource, {
          ...params,
          data: {
            ...params.data,
            pictures: [...transformedNewPictures, ...formerPictures],
          },
        })
      );
  },
});

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });
