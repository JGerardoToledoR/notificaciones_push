// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyDL_P4WuTC6FOdJgPd87H4CBsIme2jnpzA",
  authDomain: "proyect-notify-10b.firebaseapp.com",
  projectId: "proyect-notify-10b",
  storageBucket: "proyect-notify-10b.firebasestorage.app",
  messagingSenderId: "481005154896",
  appId: "1:481005154896:web:da8acc94bfabe79d06d755"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "./192.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('./'));
});