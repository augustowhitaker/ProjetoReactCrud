package services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Scanner;

import connector.ConexaoComBanco;
import model.Login;

public class LoginService {
	
	public void save() {
		Scanner sc = new Scanner(System.in);
		
		
		Login login = new Login();
		
		System.out.println("Digite o seu nome");
		login.setNome(sc.nextLine());
		
		System.out.println("Digite o seu email");
		login.setEmail(sc.nextLine());
		
		System.out.println("Digite sua senha");
		login.setSenha(sc.nextLine());
			
		String sql = "INSERT INTO Login(nome, email, senha)VALUES(?, ?, ?)";
		
		Connection conn = null;
		PreparedStatement pstm = null;
		
		try {
			conn = ConexaoComBanco.createConnection();
			pstm = conn.prepareStatement(sql);
			
			pstm.setString(1, login.getNome());
			pstm.setString(1, login.getEmail());
			pstm.setString(3, login.getSenha());
			
			pstm.execute();
			
			
			System.out.println("Login inserido com sucesso");
			
			conn.close();
			pstm.close();
			
			
		}catch(Exception ex) {
			
			System.out.println(ex.getMessage());
		}
		
	}

}
