import React, { PropTypes } from 'react';
import AuthorizedComponent from 'authorized-component';

class Counter extends AuthorizedComponent {
  onAdd() {
    const { onAdd, value } = this.props;

    return onAdd(value + 5);
  }

  onAddSlow() {
    const { onAddSlowly, value } = this.props;

    return onAddSlowly(value + 5);
  }

  render() {
    const { value, t } = this.props;

    return (<div>
      <h4>{ value }</h4>
      <button onClick={ this.onAdd }>{ t('add') }</button>
      <button onClick={ this.onAddSlow }>{ t('add_slowly') }</button>
    </div>);
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default Counter;