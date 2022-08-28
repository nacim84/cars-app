import api.car_controller as car_controller
import uvicorn

app = car_controller.car_app


def main():
    uvicorn.run("main:app")


if __name__ == '__main__':
    main()
