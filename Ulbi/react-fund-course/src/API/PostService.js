export default class PostService {
  static async getPage(limit = 10, page = 1) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
      .then(res => res.json())
      .then(json =>
        json.map(item => ({
          id: item.id,
          title: item.title,
          text: item.body,
        }))
      )
      .catch(e => console.log(e.message));
    return response;
  }

  static async getAll() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        // console.log(res);
        return res.json();
      })
      .then(json => {
        // console.log(json);
        return json.map(item => ({
          id: item.id,
          title: item.title,
          text: item.body,
        }));
      })
      .catch(e => console.log(e.message));
    return response;
  }
}
