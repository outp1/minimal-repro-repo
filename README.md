## Minimal reproductional repo for the [issue](https://github.com/gid-oss/dataui-nestjs-crud/issues/35)

To build and run follow steps:

1. npm run build
2. sudo docker-compose build && sudo docker-compose up -d
3. npm run migration:run
4. npm run start:dev

Then go to http://127.0.0.1:5000/api-docs#/Equipment/getManyBaseEquipmentControllerEquipment where you will see the issue.
