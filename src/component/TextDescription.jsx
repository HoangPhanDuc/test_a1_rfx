export default function TextDescription(props) {
  return (
    <div
      className="w-[497.29px] font-inter"
      style={{ color: props.color, fontSize:props.size, width: props.witdh }}
    >
      {props.content}
    </div>
  );
}
