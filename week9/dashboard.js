let m_open, m_close, m_board;
m_open = document.getElementById('menu-open');
m_close = document.getElementById('menu-close');
m_board = document.getElementById('menu-board');

m_open.addEventListener('click', () => {
	m_board.style.display = 'block';
});
m_close.addEventListener('click', () => {
	m_board.style.display = 'none';
});


var t1, t2, t3, t4, t5, t6
t1 = document.getElementById("t1")
t2 = document.getElementById("t2")
t3 = document.getElementById("t3")
t4 = document.getElementById("t4")
t5 = document.getElementById("t5")
t6 = document.getElementById("t6")
var sort = document.getElementById("sort");
var sort2 = document.getElementById("sort2");

var orders = document.getElementById("orders");

sort.addEventListener("click", () => {
	t1.innerHTML = "Charles Odili";
	t2.innerHTML = "Setemi Ojo";
	t3.innerHTML = "Rising Ozegbua";
	t4.innerHTML = "Jerry Uke";
	t5.innerHTML = "John Ajeigbe";
	t6.innerHTML = "Tabitha Kavyu";
	console.log("asc");

	sort.style.display = "none";

	if (sort.style.display = "none") {
		sort2.style.display = "flex";
		sort2.style.cursor = "pointer";

		sort2.addEventListener("click", () => {
			t1.innerHTML = "Tabitha Kavyu";
			t2.innerHTML = "Charles Odili";
			t3.innerHTML = "Setemi Ojo";
			t4.innerHTML = "Rising Ozegbua";
			t5.innerHTML = "Jerry Uke";
			t6.innerHTML = "John Ajeigbe";
			console.log("des");

			sort.style.display = "flex";
			sort2.style.display = "none";
		})
	}
})
