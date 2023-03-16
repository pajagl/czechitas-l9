// Poznámky z hodiny 
const goodbye = (name) => {
    //return "Ahoj" + name
    return 'Ahoj "${name}"'
}

// Rozvoz jídla

const hejsci = (zasilka) => {
	if (Math.random() > 0.1) {
		return `Zásilka „${zasilka}“ doručena za 30 minut, kámo.`
	}

	return `Zásilka „${zasilka}“ se ztratila. Kurýra přepadla smečka hladových bezdomovců.`
}

const machri = (zasilka) => {
	if (Math.random() > 0.5) {
		return `Zásilka „${zasilka}“ doručena za 10 minut.`
	}

	return `Zásilka „${zasilka}“ ztracena. Drona přepadlo hejno hladových holubů.`
}

const borci = (zasilka) => {
	return `Zásilka „${zasilka}“ doručena s přehledem za dvě hodiny.`
}

const objednat = (jidlo, doruceni) => {
	const cislo = Math.floor(Math.random() * 1000)
	const id = String(cislo).padStart(4, '0')
	const balicek = `${jidlo} (${id})`
	return doruceni(balicek)
}

// Chytřjší kalkulačka
const plus = (num1, num2) => {
	return num1 + num2
}

const minus = (num1, num2) => {
	return num1 - num2
}

const times = (num1, num2) => {
	return num1 * num2
}

const divide = (num1, num2) => {
	return num1 / num2
}

const calc = (num1, op, num2) => {
	return op(num1, num2)
}

// Zpoždění časovače
const timeIsUp = () => {
	document.body.innerHTML += '<p>Čas vypršel</p>'
}
setTimeout(timeIsUp, 5000)

/*
// Volání intervalu
setInterval(timeIsUp, 5000)
*/