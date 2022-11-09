import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <Item key={id}>
      <p>
        {name}: {number}
      </p>
      className={css.button}
          type="button"
          onClick={() => onDeleteContact(contactId)}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};