document.addEventListener("DOMContentLoaded", () => {
    const compañerosList = document.getElementById("companeros-list");

    // URL de tu script de Google Apps
    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=ymBI0cLKn1KrZUEddEMNLtWlQSxqaJ5nQ3Hz7EmV0GkJhmEcIJ_56x6RPlbqq1GT3e6EnJI55PP1pv1KLVTtNf7D7_Ohiyd_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPVZ3GQDopcOaiEEX4WultQdDS1gC01H7LNQRHJrRbJzXuYHgYV7YOtEHvOdoh1dyc9U-F05sWkHjCZXETl9TrL8PsNv7Uk6zNz9Jw9Md8uu&lib=MH5kqVjUOw6OLTh66UR4MXJ9V3R5bwK4y";

    // Hacer la petición para obtener los datos
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!Array.isArray(data)) {
                compañerosList.innerHTML = "<p>Datos inválidos o no formateados correctamente.</p>";
                return;
            }

            // Mostrar los datos completos (sin filtrado)
            data.forEach(companero => {
                const card = document.createElement("div");
                card.classList.add("companero-card");

                const nombre = document.createElement("h3");
                nombre.textContent = `${companero["Nombre y apellido"]}`;
                card.appendChild(nombre);

                const afiliado = document.createElement("p");
                afiliado.textContent = `Número de afiliado: ${companero["Numero de afiliado"]}`;
                card.appendChild(afiliado);

                const documento = document.createElement("p");
                documento.textContent = `Documento N: ${companero["Documento N"]}`;
                card.appendChild(documento);

                const categoria = document.createElement("p");
                categoria.textContent = `Categoría: ${companero["Categoria"]}`;
                card.appendChild(categoria);

                const tarea = document.createElement("p");
                tarea.textContent = `Tarea: ${companero["Tarea"]}`;
                card.appendChild(tarea);

                const fechaIngreso = document.createElement("p");
                fechaIngreso.textContent = `Fecha de ingreso: ${companero["Fecha de ingreso"]}`;
                card.appendChild(fechaIngreso);

                compañerosList.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
            compañerosList.innerHTML = "<p>Hubo un error al cargar los datos.</p>";
        });
});
