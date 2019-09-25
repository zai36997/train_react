import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Shop extends Component {
  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();

  state = {
    shop: {},
    location: {
      lat: 0,
      lgn: 0
    },
    menus: []
  };
  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      // console.log(this.props)
      // console.log(id)
      const shopUrl = "https://zzaaii.herokuapp.com/api/shop/" + id;
      const response = await axios.get(shopUrl, {
        cancelToken: this.source.token
      });
      // console.log(response.data.data)
      this.setState({
        shop: response.data.data,
        location: response.data.data.location,
        menus: response.data.data.manus
      });
    } catch (error) {
      if (axios.isCancel(this.thrown)) {
        console.log("Request canceled", this.thrown.message);
      } else {
        console.error(error);
      }
    }
  }

  componentWillUnmount() {
    this.source.cancel();
  }
  render() {
    return (
      <>
        <div className="container my-5">
          <h1>{this.state.shop.name}</h1>
          <div className="row">
            {this.state.menus.map(menu => {
              return (
                <div className="col-md-4 md3" key={menu._id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{menu.name}</h5>
                      <div className="col-me-6">
                        ชื่อ {menu.name}
                        <br />
                        ราคา {menu.price.$numberDecimal}
                        <br />
                        <button className="btn btn-success"> ซื้อเลย </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
