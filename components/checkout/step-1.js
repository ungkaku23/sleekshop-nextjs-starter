import Link from "next/link"
import { useState } from "react"

export default function Step1({user}) {
  const [userType, setUserType] = useState('privat')
  const [deliveryType, setDeliveryType] = useState('free')
  return (
    <div>
      <div className="mt-8">
        {user.status == "active" && <div className="mb-4">
          <p className="text-gray-600 text-sm">Sie sind eingeloggt als {user.attributes.firstname.value} <Link href="/profile"><a className="mt-3 inline-block border-b-2 border-blue-600 text-gray-600 text-sm" href="#">Profil ansehen</a></Link></p>
        </div>}

        {user.status != "active" && <div className="mb-4 flex">
          <label className="block w-full">
            <input type="text" className="block w-full bg-white rounded-md border p-2 focus:outline-none" placeholder="E-Mail" name="email" required/>
          </label>
        </div>}

        <div className="flex mb-4">
          <div>
            <input type="radio" id="privat" name="userType" value="privat" checked={userType == 'privat'} onChange={() => setUserType('privat')}/>
            <label className="ml-1 text-sm text-gray-700" htmlFor="privat">Privat</label>
          </div>
          <div className="ml-4">
            <input type="radio" id="firma" name="userType" value="firma" checked={userType == 'firma'} onChange={() => setUserType('firma')} />
            <label className="ml-1 text-sm text-gray-700" htmlFor="firma">Firma</label>
          </div>
        </div>

        <h4 className="text-sm text-gray-500 font-medium">Lieferadresse</h4>

        {userType == 'firma' && <div className="mt-4 flex">
          <label className="block w-full">
            <input type="text" className="block w-full bg-white rounded-md border p-2 focus:outline-none" placeholder="Firmenname" name="delivery_companyname" />
          </label>
        </div>}


        <div className="mt-4 flex">
          <label className="block w-6/12">
            <input type="text" className="block w-full bg-white rounded-md border p-2 focus:outline-none" placeholder="Vorname" name="delivery_firstname" defaultValue={user.attributes && user.attributes.firstname.value} required/>
          </label>
          <label className="block w-6/12 ml-3">
            <input type="text" className="block w-full bg-white rounded-md border p-2 focus:outline-none" placeholder="Nachname" name="delivery_lastname" defaultValue={user.attributes && user.attributes.lastname.value} required/>
          </label>
        </div>

        <div className="mt-4 flex">
          <label className="block flex-1">
            <input type="text" className="block w-full bg-white rounded-md border p-2 focus:outline-none" placeholder="Straße" name="delivery_street" defaultValue={user.attributes && user.attributes.street.value} required/>
          </label>
          <label className="block  ml-3 w-3/12">
            <input type="text" className="block w-full bg-white rounded-md border p-2 focus:outline-none" placeholder="Nummer" name="delivery_number" defaultValue={user.attributes && user.attributes.number.value} required/>
          </label>
        </div>

        <div className="mt-4 flex">
          <label className="block w-3/12">
            <input type="text" className="block w-full bg-white rounded-md border p-2 focus:outline-none" placeholder="PLZ" name="delivery_zip" defaultValue={user.attributes && user.attributes.zip.value} required/>
          </label>
          <label className="block flex-1 ml-3">
            <input type="text" className="block w-full bg-white rounded-md border p-2 focus:outline-none" placeholder="Ort" name="delivery_city" defaultValue={user.attributes && user.attributes.city.value} required/>
          </label>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-sm text-gray-500 font-medium">Lieferung</h4>
        <div className="mt-6">

          <button 
            className={`flex items-center justify-between w-full bg-white rounded-md p-4 focus:outline-none cursor-pointer mb-4 ${deliveryType == 'free' ? 'border-blue-500 border-2' : 'border'}`}
            onClick={() => setDeliveryType('free')}
            type="button"
          >
            <label className="flex items-center">
              <input type="radio" className="form-radio h-5 w-5 text-blue-600" checked={deliveryType == 'free'} /><span className="ml-2 text-sm text-gray-700">Standard</span>
            </label>
            <span className="text-gray-600 text-sm">Kostenlos</span>
          </button>

          <button
            className={`flex items-center justify-between w-full bg-white rounded-md p-4 focus:outline-none cursor-pointer ${deliveryType == 'express' ? 'border-blue-500 border-2' : 'border'}`}
            onClick={() => setDeliveryType('express')}
            type="button"
          >
            <label className="flex items-center">
              <input type="radio" className="form-radio h-5 w-5 text-blue-600" checked={deliveryType == 'express'} /><span className="ml-2 text-sm text-gray-700">Express</span>
            </label>
            <span className="text-gray-600 text-sm">15,00 €</span>
          </button>
        </div>
      </div>
    </div>
  )
}