export const DataInfo = (props) => {
    const { inform } = props;
    let capture = "";
    switch (inform) {
      case "Blackhole":
        return (capture =
           "A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—cannot escape from it.The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.");
      case "Magnetar":
        return (capture =
          "A magnetar is a type of neutron star believed to have an extremely powerful magnetic field (∼109 to 1011 T, ∼1013 to 1015 G).The magnetic-field decay powers the emission of high-energy electromagnetic radiation, particularly X-rays and gamma rays.");
      case "Pulsar":
        return (capture =
          "A pulsar (from pulsating radio source) is a highly magnetized rotating compact star (usually neutron stars but also white dwarfs) that emits beams of electromagnetic radiation out of its magnetic poles.");
      default:
    }
    return capture;
  };