FROM eclipse-temurin:21
WORKDIR /usr/src/app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Download dependencies, layer is cached and only re-runs if pom.xml changes
RUN ./mvnw dependency:go-offline

COPY src ./src
EXPOSE 8080
CMD ["./mvnw", "spring-boot:run"]
