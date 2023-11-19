const Hero = () => {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        fontFamily: "EB Garamond",
      }}
    >
      <div
        style={{
          paddingTop: "60px",
          display: "flex",
          justifyContent: "end",
          fontFamily: 'Roboto'
        }}
      >
        <div
          style={{
            backgroundColor: "#A9A9A1",
            width: "132px",
            height: "68px",
            borderRadius: "59px",
            marginRight: "19px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: '400',
            fontSize: '24px'
          }}
        >
          Story
        </div>
        <div
          style={{
            backgroundColor: "#D9D9D9",
            width: "132px",
            height: "68px",
            borderRadius: "59px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "200px",
            fontWeight: '400',
            fontSize: '24px'
          }}
        >
          Map
        </div>
      </div>
      <div
        style={{
          paddingTop: "100px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "600",
          fontSize: "100px",
        }}
      >
        Wafting Whispers
      </div>

      <div
        style={{
          paddingTop: "36px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "400",
          fontSize: "40px",
          fontStyle: "italic",
        }}
      >
        Let the wind bring you to me.
      </div>
      <div
        style={{
          paddingTop: "100px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "974px",
            height: "230px",
            fontSize: "28px",
            lineHeight: "40px",
          }}
        >
          Wafting Whispers (2023) is an interactive {bold("augmented reality")}{" "}
          art experience to connect nomadic souls, where embodied selves
          {bold("autonomously")} wafting over {bold("digital")} winds driven by
          climate data of
          {bold("physical world")}; forming an spatial-social{" "}
          {bold("network state")}.
        </div>
        <div style={{}}>{arrow}</div>
      </div>
    </div>
  );
};

export default Hero;

const arrow = (
  <svg
    width="38"
    height="45"
    viewBox="0 0 38 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.2322 43.7678C18.2085 44.7441 19.7915 44.7441 20.7678 43.7678L36.6777 27.8579C37.654 26.8816 37.654 25.2986 36.6777 24.3223C35.7014 23.346 34.1184 23.346 33.1421 24.3223L19 38.4645L4.85786 24.3223C3.88155 23.346 2.29864 23.346 1.32233 24.3223C0.346018 25.2986 0.346018 26.8816 1.32233 27.8579L17.2322 43.7678ZM16.5 -1.74325e-07L16.5 42L21.5 42L21.5 1.74325e-07L16.5 -1.74325e-07Z"
      fill="black"
    />
  </svg>
);

const bold = (word) => {
  return (
    <stong
      style={{
        fontWeight: "700",
      }}
    >
      {word}
    </stong>
  );
};
