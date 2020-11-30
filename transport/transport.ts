namespace $ {
	
	export class $my_tsmb_transport extends $mol_object2 {

		static api_base() {
			return 'http://mpksoft.ru:9091/'
		}

		@ $mol_mem
		static token( next? : string | null ) {
			return this.$.$mol_state_local.value( 'token' , next )
		}
		
		@ $mol_mem
		static headers() {

			const headers = {
			}
			
			const token = this.token()
			if( !token ) return headers
			
			return {
				... headers,
				// 'Authorization': `Bearer ${token}`,
			}

		}

		@ $mol_fiber.method
		static load( path : string ) : any {
			return this.$.$mol_fetch.json( this.api_base() + path , {
				headers : this.headers()
			} )
		}

		static link( path : string ) : any {
			return this.api_base() + path
		}

		@ $mol_fiber.method
		static save(
			path : string ,
			method : 'post' | 'put' ,
			body : object
		) : any {

			const uri = this.api_base() + path
			
			const res = this.$.$mol_fetch.response( uri , {
				method ,
				headers : {
					'Content-Type': 'application/json',
					... this.headers(),
				},
				body : JSON.stringify( body ),
			} )

			return res
		}

		@ $mol_fiber.method
		static drop(
			path : string
		) : any {

			const uri = this.api_base() + path
			
			const res = this.$.$mol_fetch.json( uri , {
				method: 'delete' ,
				headers : {
					... this.headers(),
				},
			} )

			return res
		}

	}

}
