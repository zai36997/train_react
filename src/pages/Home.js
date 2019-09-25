import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Home extends Component {
  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();
  state = {
    shops: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const shopUrl = "https://zzaaii.herokuapp.com/api/shop";
      const response = await axios.get(shopUrl, {
        cancelToken: this.source.token
      });
      this.setState({
        shops: response.data.data
      });
      console.log(response.data.data);
    } catch (error) {
      if (axios.isCancel(this.thrown)) {
        console.log("Request canceled", this.thrown.message);
      } else {
        console.error(error);
      }
    }
  };

  componentWillUnmount() {
    this.source.cancel();
  }

  render() {
    return (
      <>
        <main role="main">
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Hello, world!</h1>
              <p>
                This is a template for a simple marketing or informational
                website. It includes a large callout called a jumbotron and
                three supporting pieces of content. Use it as a starting point
                to create something more unique.
              </p>
              <p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more »
                </a>
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="container">
                <div className="row">
                  {this.state.shops.map(shop => {
                    return (
                      <div className="col-md-4 md3" key={shop.id}>
                        <div className="card" style={{ width: "18rem" }}>
                          <img
                            src={shop.photo}
                            height="255"
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{shop.name}</h5>
                            <Link
                              className="btn btn-success"
                              to={{ pathname: "/shop/" + shop.id }}
                            >
                              {" "}
                              viwe Menu
                            </Link>
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr />
          </div>
        </main>
      </>
    );
  }
}
