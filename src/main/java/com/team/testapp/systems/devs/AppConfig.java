package com.team.testapp.systems.devs;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.util.Assert;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Profile(value = { "default", "dev" })
@Configuration
@ComponentScan(basePackages = "com.team.testapp.systems.devs")
@EntityScan(basePackages = { "com.team.testapp.systems.devs" })
@EnableJpaRepositories(
        entityManagerFactoryRef = "entityManagerFactory",
        basePackages = { "com.team.testapp.systems.devs" })
public class AppConfig {

    @Value("${spring.datasource.initialize}")
    private boolean springDatasourceInitialize;

    @PostConstruct
    public void init() {
        System.out.println("init starting");
        System.out.println("init; springDatasourceInitialize: " + springDatasourceInitialize);
        Assert.isTrue(springDatasourceInitialize,
                "Property 'spring.datasource.initialize' should be true.");
        System.out.println("init finished");
    }

}
