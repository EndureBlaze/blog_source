function showNotification() {
  if (GLOBAL_CONFIG.Snackbar) {
    var t =
        "light" === document.documentElement.getAttribute("data-theme")
          ? GLOBAL_CONFIG.Snackbar.bgLight
          : GLOBAL_CONFIG.Snackbar.bgDark,
      e = GLOBAL_CONFIG.Snackbar.position;
    Snackbar.show({
      text: "已更新最新版本",
      backgroundColor: t,
      duration: 5e5,
      pos: e,
      actionText: "点击刷新",
      actionTextColor: "#fff",
      onActionClick: function (t) {
        location.reload();
      },
    });
  } else {
    var o = `top: 0; background: ${
      "light" === document.documentElement.getAttribute("data-theme")
        ? "#49b1f5"
        : "#1f1f1f"
    };`;
    document.getElementById("app-refresh").style.cssText = o;
  }
}
"serviceWorker" in navigator &&
  (navigator.serviceWorker.controller &&
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      showNotification();
    }),
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js");
  }));
