class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  mapIntObject(arr) {
    return arr.reduce((acc, curr ) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles() {
    return this.maipIntObject(this.rawData.articles);
  }

  getAuthors() {
    return this.maipIntObject(this.rawData.authors);
  }
}

export default DataApi;