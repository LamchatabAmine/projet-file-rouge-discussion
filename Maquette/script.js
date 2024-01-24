document.addEventListener("DOMContentLoaded", function () {
  const openChatBtn = document.getElementById("openChatBtn");
  const closeChatBtn = document.getElementById("closeChatBtn");
  const chatModal = document.getElementById("chat-modal");

  openChatBtn.addEventListener("click", function () {
    chatModal.style.display = "block";
  });

  closeChatBtn.addEventListener("click", function () {
    chatModal.style.display = "none";
  });
});
