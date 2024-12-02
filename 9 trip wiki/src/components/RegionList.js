export default function RegionList({ $app, initialState, handleRegion }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "region-list";

  this.handleRegion = handleRegion;
  $app.appendChild(this.$target);

  this.template = () => {
    const regionList = [
      "All",
      "Asia",
      "Middle-East",
      "Europe",
      "Latin-America",
      "Africa",
      "North-America",
      "Oceania",
    ];
    let temp = ``;
    regionList.forEach((elm) => {
      const regionId = elm === "All" ? "All" : elm;
      temp += `<div id=${regionId}>${elm}</div>`;
    });

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    const regions = this.$target.querySelectorAll("div");
    regions.forEach(($region) => {
      if (
        (this.state && $region.id === this.state) ||
        (!this.state && $region.id === "All")
      ) {
        $region.className = "clicked";
      }
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
