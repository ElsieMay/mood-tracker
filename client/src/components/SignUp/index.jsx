import styles from "./styles.module.css";

const Signup = () => {
	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="mood-tracker/login">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input type="text" placeholder="Username" name="username" onChange={handleChange} value={data.username} required className={styles.input} />
						<input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required className={styles.input} />
						<input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required className={styles.input} />
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
