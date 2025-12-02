interface IDisplayCard {
  children: React.ReactNode;
  background?: string;
  marginTop?: string;
  height?: string;
  position?: "relative" | "absolute" | "static" | "fixed";
  overflow?: "hidden" | "auto" | "scroll";
  paddingTop?: string;
  paddingBottom?: string;
  borderRadius?: string ;
}

const DisplayCard = ({
  children,
  background,
  marginTop,
  height,
  position,
  overflow,
  paddingTop,
  paddingBottom,
  borderRadius
}: IDisplayCard) => {
  return (
    <div
      style={{
        width: "100%",
        background: `${background}`,
        marginTop: marginTop,
        height: height,
        position: position,
        overflow: overflow,
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
        borderRadius:borderRadius,
      }}
    >
      <div style={{ padding: "unset", maxWidth:"1536px",margin:"auto" }}>
        {children}
      </div>
    </div>
  );
};

export default DisplayCard;
