from core.application import BaseApplication

class Application(BaseApplication):
    """show_amoeba"""

    def __init__(self, name, hal, server, manager):
        super().__init__(name,hal,server,manager)
        self.requires["amoeba_markers"] = ["amoeba"]

    def listener(self, source, event,data):
        super().listener(source, event,data)

        if source == "amoeba_markers" and data is not None:
            if event == "amoeba":
               # print(data)
                self.server.send_data("amoeba_markers_info", data)