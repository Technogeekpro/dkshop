import 'package:get/state_manager.dart';
import 'package:dkshop/models/cart_item.model.dart';

class AppController extends GetxController{

  RxList<CartItemModel> cartItems = RxList<CartItemModel>([]);

}