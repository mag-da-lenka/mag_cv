console.table(`hello Hello green love`)





// HOLOGRAPHIC BODY 

const holoBody = document.getElementById("holo_fun");

// get mouse X position in mili
const handleMouseMove = (event) => {

    console.log(`1) new_move: `)

    const positionX_value = event.clientX;
    console.log(`2) positionX_value: `, positionX_value); //  2) positionX_value:  522

    const clientWidth_value = document.documentElement.clientWidth;
    console.log(`3) clientWidth_value: `, clientWidth_value) //  3) clientWidth_value:  1536

    const calculated_value_mili = positionX_value / clientWidth_value;
    console.log(`4) calculated_value_mili: `, calculated_value_mili.toFixed(3)) //  4) calculated_value_mili:  0.340

    updateHolographicBackground(calculated_value_mili);
}

// mouse X position in %
const updateHolographicBackground = (O_xxx) => {

    const percentage_value = O_xxx * 100; // 5) percentage_value:  0.000 (initial)
    console.log(`5) percentage_value: `, percentage_value.toFixed(3)) // 5) percentage_value:  33.984

    holoBody.style.backgroundPosition = percentage_value + "%";
}
