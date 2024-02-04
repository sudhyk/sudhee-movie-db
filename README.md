Example Query

```
query {
  director(id: "1") {
    id
    name
    movies {
      id
      title
      releaseYear
    }
  }
}
```
