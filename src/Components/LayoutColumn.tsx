interface props {
  size: number;
}

export default function LayoutColumn({ size }: props) {
  return <div className="layout-column" style={{ width: size }}></div>;
}
