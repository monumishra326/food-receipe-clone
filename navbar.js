function navbar() {
  return `<div id="navbar">
  <div><a href="/home.html">Home</a></div>
  <div>
    <input
      type="text"
      id="ip"
      placeholder="Search dishes you want..."
    />
  </div>
  <div>
    <a href="./random.html">Random Receipe</a>
    <a href="./rod.html">Receipes of the Day</a>
  </div>
</div>`;
}

export { navbar };
