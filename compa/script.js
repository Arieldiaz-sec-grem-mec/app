/* Estilos generales */
body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #000000;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
}

/* Contenedor del formulario */
.container {
    width: 90%;
    max-width: 400px;
    padding: 20px;
    background-color: transparent;
    text-align: center;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #ffcc00;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #cccccc;
}

input[type="text"],
input[type="number"],
input[type="date"],
select {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 15px;
    background: #333333;
    color: #ffffff;
    border: 2px solid #cccccc;
    border-radius: 5px;
    font-size: 1em;
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="date"]:focus,
select:focus {
    border-color: #ffcc00;
    outline: none;
}

button {
    width: 100%;
    padding: 10px;
    border: 2px solid #ffcc00;
    border-radius: 5px;
    background: transparent;
    color: #ffcc00;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s, color 0.3s, transform 0.3s;
}

button:hover {
    background: #ffcc00;
    color: #000000;
    transform: scale(1.05);
}

button:active {
    background: #e6b800;
    color: #000000;
    transform: scale(0.95);
}

/* Barra de progreso */
.progress-bar {
    margin-top: 10px;
    background-color: #333333;
    border-radius: 5px;
    height: 25px;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.progress {
    width: 0;
    height: 100%;
    background-color: #ffcc00;
    border-radius: 5px;
    transition: width 0.3s;
}

/* Medios Responsivos */
@media (max-width: 600px) {
    .container {
        width: 100%;
        padding: 15px;
    }

    h1 {
        font-size: 1.8em;
    }

    label {
        font-size: 1.1em;
    }

    input[type="text"],
    input[type="number"],
    input[type="date"],
    select {
        font-size: 0.9em;
    }

    button {
        padding: 8px;
        font-size: 1.1em;
    }

    .progress-bar {
        height: 20px;
    }
}
