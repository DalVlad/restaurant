FROM openjdk:11-slim
ARG JAR_FILE=target/restaurant-0.0.1-SNAPSHOT.jar
EXPOSE 8080
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]
