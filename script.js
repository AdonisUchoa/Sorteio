
    var emails = [];

    function realizarSorteio() {
      var emailList = document.getElementById("emailList").value;
      var fileInput = document.getElementById("fileInput");

      if (emailList.trim() !== "") {
        emails = emailList.split("\n");
      } else if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
          var data = new Uint8Array(e.target.result);
          var workbook = XLSX.read(data, { type: "array" });
          var worksheet = workbook.Sheets[workbook.SheetNames[0]];
          var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          emails = jsonData.flat().filter((email) => email !== "");
        };
        reader.readAsArrayBuffer(file);
      } else {
        emails = [];
      }

      var numeroParticipantes = emails.length;

      if (numeroParticipantes > 0) {
        var indiceVencedor = Math.floor(Math.random() * numeroParticipantes);
        var emailVencedor = emails[indiceVencedor].trim();
        if (emailVencedor !== "") {
          document.getElementById("vencedor").textContent = emailVencedor;
          abrirModal(emailVencedor);
          criarConfetes();
        } else {
          realizarSorteio(); // Realiza o sorteio novamente se o ganhador for um espaço em branco
        }
      } else {
        document.getElementById("vencedor").textContent = "Nenhum email inserido.";
      }
    }

    function abrirModal(vencedor) {
      var modal = document.getElementById("modal");
      var modalWinner = document.getElementById("modalWinner");
      modalWinner.textContent = vencedor;
      modal.style.display = "block";
    }

    function fecharModal() {
      var modal = document.getElementById("modal");
      modal.style.display = "none";
      removerConfetes();
    }

    function criarConfetes() {
      var container = document.querySelector(".container");
      for (var i = 0; i < 100; i++) {
        var confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.animationDelay = Math.random() + "s";
        container.appendChild(confetti);
      }
    }

    function removerConfetes() {
      var confettis = document.querySelectorAll(".confetti");
      for (var i = 0; i < confettis.length; i++) {
        var confetti = confettis[i];
        confetti.parentNode.removeChild(confetti);
      }
    }

