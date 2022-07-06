import propTypes from 'prop-types'

function IconSwitch(props) {
    return (
      <div className="container" id="icon">
            {props.icon === 'view_list'
            ?   <span className="material-icons" onClick={() => {props.onSwitch(props.icon)}}>
                    view_module
                </span>
            :   <span className="material-icons" onClick={() => {props.onSwitch(props.icon)}}>
                    view_list
                </span>
            }
      </div>
    );
}

IconSwitch.propTypes = {
  icon: propTypes.string
}
  
export default IconSwitch;
  