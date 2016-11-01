import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

class Search extends React.Component {
  render() {
    return (
      <div>
        <BenchMap />
        <BenchIndex benches={this.props.benches} requestBenches={this.props.requestBenches} />
      </div>
    );
  }
}

export default Search;
