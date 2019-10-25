import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import "../../i18n";
import uuid from "react-uuid";

import { loadMovies } from "../../actions";

class MovieGrid extends Component {
  loading = () => {
    if (this.props.isLoading) return <p>loading...</p>;
  };

  componentDidMount() {
    this.props.loadMovies();
    this.props.loadMovies();
  }
  render() {
    const { t } = this.props;
    const { movies } = this.props;
    return (
      <div>
        {t("Movies")}
        <div>
          {movies.map(movie => (
            <img
              key={uuid()}
              src={movie.img}
              alt={movie.alt}
              style={{ margin: 10 + "px" }}
            />
          ))}
        </div>
        <button onClick={this.props.loadMovies}>Load movies</button>
        {this.loading()}
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, movies, error }) => ({
  isLoading,
  movies,
  error
});

const mapDispatchToProps = dispatch => ({
  loadMovies: () => dispatch(loadMovies())
});

export default withTranslation()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieGrid)
);
