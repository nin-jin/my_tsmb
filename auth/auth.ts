namespace $ {

	const Response = $mol_data_record({
		token: $mol_data_string,
	})

	export class $my_tsmb_auth extends $mol_object2 {

		@ $mol_fiber.method
		static auth( creds : { username : string , password : string } ) {

			this.$.$my_tsmb_transport.token( 'true' )
			return true

			const res = this.$.$my_tsmb_transport.save(
				`login_check`,
				'post',
				creds,
			)

			this.$.$my_tsmb_transport.token( Response( res ).token )

			return true
		}

		static signed() {
			return Boolean( this.$.$my_tsmb_transport.token() )
		}

		static drop() {
			this.$.$my_tsmb_transport.token( '' )
		}

	}

}
