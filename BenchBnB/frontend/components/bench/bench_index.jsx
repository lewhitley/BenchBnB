import React from 'react';
import { benchArray } from '../../reducers/selectors/bench_selectors';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    if (this.props.benches){
      return (<ul>
        {benchArray(this.props).map( bench => BenchIndexItem(bench) )}
      </ul>);
    } else {
      return <div></div>;
    }
  }
}

export default BenchIndex;
