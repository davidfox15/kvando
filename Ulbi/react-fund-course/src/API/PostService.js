export default class PostService {
  static async getAll() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
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
}
