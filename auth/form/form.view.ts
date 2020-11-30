namespace $.$$ {

	export class $my_tsmb_auth_form extends $.$my_tsmb_auth_form {

		auth() {

			const person = this.$.$my_tsmb_auth.auth({
				username : this.login() ,
				password : this.pass() ,
			})

		}

		submit( event: KeyboardEvent ) {
			this.Submit().event_activate( event )
		}

	}

}
