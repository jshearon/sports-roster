import PropTypes from 'prop-types';

const playerShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  teamname: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { playerShape };
