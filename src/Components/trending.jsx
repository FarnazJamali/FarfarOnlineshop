// import Axios from "axios";
import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
class Trending extends Component {
  state = {
    images: [
      {
        id: "0",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        download_url:
          "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        original: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        thumbnail: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: "1",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        download_url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        original: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        thumbnail: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      },
      {
        id: "2",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        download_url: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        original: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        thumbnail: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      },
      {
        id: "3",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        download_url:
          "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        original: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        thumbnail: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      },
    ],
  };
  // async componentDidMount() {
  //   const { data: images } = await Axios.get(
  //     "https://fakestoreapi.com/products?limit=4"
  //   );
  //   images.map((image) => {
  //     image.image.original = image.download_url;
  //     image.image.thumbnail = image.download_url;
  //   });
  //   this.setState({ images });
  //   console.log(images);
  //   console.log("component mounted");
  // }

  render() {
    const { images } = this.state;
    console.log(images);
    console.log("component rendered");
    return (
      <>
        <div>
          <ImageGallery items={images} thumbnailPosition={"right"} />
        </div>
      </>
    );
  }
}

export default Trending;
