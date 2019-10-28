import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import MovieCard from "../MovieCard";
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
        <Grid container>
          {movies.map(movie => (
            <Grid item xs={3} key={uuid()}>
              <MovieCard
                alt={movie.alt}
                img={movie.img}
                title={movie.title}
                rating={movie.rating}
                style={{ margin: 10 + "px" }}
              />
            </Grid>
          ))}
        </Grid>
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
