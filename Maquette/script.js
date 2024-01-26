document.addEventListener("DOMContentLoaded", function () {
  createHTML();
  const openChatBtn = document.getElementById("openChatBtn");
  const closeChatBtn = document.getElementById("closeChatBtn");
  const chatModal = document.getElementById("chat-modal");

  openChatBtn.addEventListener("click", function () {
    chatModal.style.display = "block";
  });

  closeChatBtn.addEventListener("click", function () {
    chatModal.style.display = "none";
  });

  // Add event listener to detect clicks outside the chat modal
  // document.addEventListener("click", function (event) {
  //   // Check if the clicked element is not part of the chat modal
  //   if (!chatModal.contains(event.target) && event.target !== openChatBtn) {
  //     chatModal.style.display = "none";
  //   }
  // });
});

function createHTML() {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");

  // Create chat button
  const chatButton = createChatButton();
  chatContainer.appendChild(chatButton);

  // Create chat modal
  const chatModal = createChatModal();
  chatContainer.appendChild(chatModal);

  // Append chat container to the document body
  document.body.appendChild(chatContainer);
}

function createChatButton() {
  const chatButtonContainer = document.createElement("div");
  chatButtonContainer.classList.add("chat-button");
  chatButtonContainer.id = "openChatBtn";

  const chatButton = document.createElement("button");
  chatButton.classList.add("chat-icon-btn");

  const chatButtonImg = document.createElement("img");
  chatButtonImg.src =
    "https://cdn.jsdelivr.net/gh/LamchatabAmine/gh-cdn/images/discuss.png";
  chatButtonImg.alt = "Chat";

  chatButton.appendChild(chatButtonImg);
  chatButtonContainer.appendChild(chatButton);

  return chatButtonContainer;
}

function createChatModal() {
  const chatModal = document.createElement("div");
  const chatHeaderStatusLine = document.createElement("div");
  chatModal.id = "chat-modal";
  chatModal.classList.add("discuss-chat-modal");

  const discussModalContent = document.createElement("div");
  discussModalContent.classList.add("discuss-modal-content");

  // Create chat header
  const chatHeader = createChatHeader();
  discussModalContent.appendChild(chatHeader);

  chatHeaderStatusLine.classList.add("discuss-chat-header-status-line");
  chatHeaderStatusLine.id = "chat-header-status-line";
  discussModalContent.appendChild(chatHeaderStatusLine);

  // Create chat panel
  const chatPanel = createChatPanel();
  discussModalContent.appendChild(chatPanel);

  // Create conversation panel
  const conversationPanel = createConversationPanel();
  discussModalContent.appendChild(conversationPanel);

  chatModal.appendChild(discussModalContent);

  return chatModal;
}

function createChatHeader() {
  const chatHeader = document.createElement("div");
  chatHeader.classList.add("discuss-chat-header");

  const chatHeaderTitle = document.createElement("h2");
  chatHeaderTitle.classList.add("discuss-chat-header-title");
  chatHeaderTitle.textContent = "Solicode Chat";

  const closeButton = document.createElement("button");
  closeButton.id = "closeChatBtn";
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;";

  chatHeader.appendChild(chatHeaderTitle);
  chatHeader.appendChild(closeButton);

  return chatHeader;
}

function createChatPanel() {
  const chatPanel = document.createElement("div");
  const chatPanelContainer = document.createElement("div");
  const chatContainer = document.createElement("div");
  const chatItemContainer = document.createElement("div");
  chatPanel.id = "chat-panel";
  chatPanel.classList.add("body-module");

  chatPanelContainer.classList.add("body-module-chatPanelContainer");
  chatPanel.appendChild(chatPanelContainer);

  chatContainer.classList.add("body-module-chatContainer");
  chatPanelContainer.appendChild(chatContainer);

  chatItemContainer.classList.add("body-module-chatItemContainer");
  chatContainer.appendChild(chatItemContainer);

  const bodyModuleWelcomeTitle = createWelcomeTitle();
  chatItemContainer.appendChild(bodyModuleWelcomeTitle);

  const bodyModuleWelcomeIntro = createWelcomeIntro();
  chatItemContainer.appendChild(bodyModuleWelcomeIntro);

  const bodyModuleCommentsUsers = createCommentUsers();
  chatItemContainer.appendChild(bodyModuleCommentsUsers);

  return chatPanel;
}

function createWelcomeTitle() {
  const WelcomeTitle = document.createElement("div");
  WelcomeTitle.classList.add("body-module-welcome-title");

  WelcomeTitle.innerHTML = `
    <img class="body-module-welcomeIcon" src="./images/discuss.png" alt="Discuss">
      <div class="body-module-welcome-titleBrand">
      <span class="body-module-welcomeBlueTitle">Discuss</span>
    </div>
  `;

  return WelcomeTitle;
}

function createWelcomeIntro() {
  const WelcomeIntro = document.createElement("div");
  WelcomeIntro.classList.add("body-module__welcome-Intro");

  WelcomeIntro.textContent =
    "vous pouvez participer à des discussions en temps réel, poser des questions et partager des informations dans le contexte du contenu qu'ils consultent.";

  return WelcomeIntro;
}

function createCommentUsers() {
  const CommentUsers = document.createElement("div");
  CommentUsers.classList.add("body-module-comments-users");
  CommentUsers.style.marginTop = "25px";

  const messagesFromDatabase = [
    {
      username: "Amine Lamchatab",
      comment: "Is this template really for free? That's unbelievable!",
      avatar:
        "https://cdn.jsdelivr.net/gh/LamchatabAmine/gh-cdn/images/avatar.png",
      create_at: "23 Jan 2:00 pm",
    },
    {
      username: "Hamid Achoua",
      comment: "Is this template really for free? That's unbelievable!",
      avatar:
        "https://cdn.jsdelivr.net/gh/LamchatabAmine/gh-cdn/images/avatar.png",
      create_at: "23 Jan 2:00 pm",
    },
    {
      username: "Soufian Boukhar",
      comment: "Is this template really for free? That's unbelievable!",
      avatar:
        "https://cdn.jsdelivr.net/gh/LamchatabAmine/gh-cdn/images/avatar.png",
      create_at: "23 Jan 2:00 pm",
    },
    {
      username: "Jalil betroji",
      comment: "Is this template really for free? That's unbelievable!",
      avatar:
        "https://cdn.jsdelivr.net/gh/LamchatabAmine/gh-cdn/images/avatar.png",
      create_at: "23 Jan 2:00 pm",
    },
  ];

  messagesFromDatabase.forEach((message) => {
    const ChatMsg = document.createElement("div");
    ChatMsg.classList.add("direct-chat-msg");

    ChatMsg.innerHTML = `
    <div class="direct-chat-infos clearfix">
      <span class="direct-chat-name float-left">${message.username}</span>
      <span class="direct-chat-timestamp float-right">${message.create_at}</span>
    </div>
    <img class="direct-chat-img" src="${message.avatar}" alt="message user image">
    <div class="direct-chat-text">${message.comment}</div>
  `;

    CommentUsers.appendChild(ChatMsg);
  });

  return CommentUsers;
}

function createConversationPanel() {
  const conversationPanel = document.createElement("div");
  const conversationPanelContainer = document.createElement("div");
  conversationPanel.classList.add("chat__conversation-panel");
  conversationPanelContainer.classList.add(
    "chat__conversation-panel__container"
  );

  conversationPanel.appendChild(conversationPanelContainer);

  const ButtonAddFile = document.createElement("button");
  ButtonAddFile.classList.add(
    "chat__conversation-panel__button",
    "panel-item",
    "btn-icon",
    "add-file-button"
  );

  ButtonAddFile.innerHTML = `
  <svg class="feather feather-plus sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>`;

  // Create input file element
  const inputFile = document.createElement("input");
  inputFile.type = "file";
  inputFile.style.display = "none"; // Hide the input file initially

  // Trigger input file selection when ButtonAddFile is clicked
  ButtonAddFile.addEventListener("click", function () {
    inputFile.click(); // Simulate a click event on the input file
  });

  // Create form inputs
  const inputComment = document.createElement("input");
  inputComment.type = "text";
  inputComment.name = "comment";
  inputComment.placeholder = "Type a message...";
  inputComment.id = "chat__comment";
  inputComment.classList.add("chat__conversation-panel__input", "panel-item");

  const ButtonSendComment = document.createElement("button");
  ButtonSendComment.type = "submit";
  ButtonSendComment.classList.add(
    "chat__conversation-panel__button",
    "panel-item",
    "btn-icon",
    "send-message-button"
  );
  ButtonSendComment.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z" />
  </svg>`;

  conversationPanelContainer.appendChild(ButtonAddFile);
  conversationPanelContainer.appendChild(inputComment);
  conversationPanelContainer.appendChild(ButtonSendComment);

  return conversationPanel;
}
