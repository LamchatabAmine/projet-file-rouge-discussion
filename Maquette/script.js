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
      comment: "Yes, it's completely free to use!",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/009/305/107/non_2x/man-avatar-clipart-illustration-free-png.png",
      create_at: "23 Jan 5:00 pm",
    },
    {
      username: "Soufian Boukhar",
      comment: "That's awesome! Thanks for sharing.",
      avatar:
        "https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-man-avatar-isolated-png-image_9935818.png",
      create_at: "23 Jan 2:25 pm",
    },
    {
      username: "Jalil betroji",
      comment: "I can't believe it! Great find, Amine.",
      avatar:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      create_at: "24 Jan 1:00 pm",
    },
  ];

  messagesFromDatabase.forEach((message) => {
    const ChatMsg = document.createElement("div");
    ChatMsg.classList.add("direct-chat-msg");

    const ChatInfos = document.createElement("div");
    ChatInfos.classList.add("direct-chat-infos", "clearfix");

    const usernameSpan = document.createElement("span");
    usernameSpan.classList.add("direct-chat-name", "float-left");
    usernameSpan.textContent = message.username;

    const timestampSpan = document.createElement("span");
    timestampSpan.classList.add("direct-chat-timestamp", "float-right");
    timestampSpan.textContent = message.create_at;

    ChatInfos.appendChild(usernameSpan);
    ChatInfos.appendChild(timestampSpan);

    const ChatImg = document.createElement("img");
    ChatImg.classList.add("direct-chat-img");
    ChatImg.src = message.avatar;
    ChatImg.alt = "message user image";

    const messageText = document.createElement("div");
    messageText.classList.add("direct-chat-text");
    messageText.style.position = "relative";

    const messageActionsToggle = document.createElement("span");
    messageActionsToggle.classList.add("message-actions-toggle", "hide");
    messageActionsToggle.innerHTML = svgToggleDown;

    const messageActions = document.createElement("div");
    messageActions.classList.add("message-actions");
    messageActions.style.display = "none";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.textContent = "Edit";

    messageActions.appendChild(deleteButton);
    messageActions.appendChild(editButton);

    messageText.textContent = message.comment;
    messageText.appendChild(messageActionsToggle);
    messageText.appendChild(messageActions);

    ChatMsg.appendChild(ChatInfos);
    ChatMsg.appendChild(ChatImg);
    ChatMsg.appendChild(messageText);

    ChatMsg.querySelector(".message-actions-toggle").addEventListener(
      "click",
      () => {
        const actions = ChatMsg.querySelector(".message-actions");
        actions.style.display =
          actions.style.display === "none" ? "block" : "none";
      }
    );

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

// helpers

const svgToggleDown = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<g fill="none" fill-rule="evenodd">
<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g></svg>`;
