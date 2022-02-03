package com.epdelivery.epdelivery.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {
	
	@Autowired
	private JwtTokenStore tokenStore;
	
	private static final String[] CLIENT = { "/oauth/token", "/h2-console/**" };
	
	private static final String[] COZINHEIRO_OR_MOTOBOY = { "/orders/**", "/products/**" };
	
	private static final String[] ADMIN = { "/users/**", "/products/**" };
	
	@Override
	public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
		resources.tokenStore(tokenStore);
	}

	@Override
	public void configure(HttpSecurity http) throws Exception {

		// H2
//		if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
//			http.headers().frameOptions().disable();
//		}
		
		http.authorizeRequests()
		.antMatchers(CLIENT).permitAll()
		.antMatchers(HttpMethod.GET, COZINHEIRO_OR_MOTOBOY).permitAll()
		.antMatchers(COZINHEIRO_OR_MOTOBOY).hasAnyRole("COZINHEIRO", "MOTOBOY")
		.antMatchers(ADMIN).hasRole("ADMIN")
		.anyRequest().authenticated();
	}	

}
