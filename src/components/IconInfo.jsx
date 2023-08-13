const IconText = ({ text, icon }) => (
    <div className="text-center mx-auto">
        {icon}
        <h6 className="font-medium">{text}</h6>
    </div>
);

IconText.displayName = 'IconText';

export default IconText;