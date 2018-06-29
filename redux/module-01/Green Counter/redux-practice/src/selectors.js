export const counterValue = state => state.counter;
export const getGallery = state => state.gallery;
export const galleryCount = state => getGallery(state).length;
