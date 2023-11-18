import PropTypes from 'prop-types';

const InputSetting = ({ title, isi }) => {
    InputSetting.propTypes = {
        title: PropTypes.string.isRequired,
        isi: PropTypes.string.isRequired
      };
  return (
    <div>
        <div>
                <p className="pl-5 pt-3 font-semibold mb-2">
                    {title}
                </p>
            </div>
            <div>
                <input 
                type="text"
                placeholder={isi}
                className="border border-orange-500 w-1/2 input rounded-full"
                />
            </div>
    </div>
  )
}

export default InputSetting