export function SelectLibrary(libraryId) {
  return {
    type: 'select_library',
    payload: libraryId
  };
}
